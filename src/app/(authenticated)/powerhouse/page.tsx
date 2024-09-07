'use client';

import { useUserContext } from '@/core/context';
import { Api } from '@/core/trpc';
import { PageLayout } from '@/designSystem/layouts/Page.layout';
import { Line } from '@ant-design/charts';
import { Calendar, Card, Col, Input, Modal, Row, Spin, Typography } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';
import Sentiment from 'sentiment';
import { useMutation } from '@trpc/react';

const { Title, Text } = Typography;
const { TextArea } = Input;

// MoodGraph Component
const MoodGraph = ({ notes, notesLoading }) => {
  const [graphData, setGraphData] = useState([]);
  const sentimentAnalyzer = new Sentiment();

  useEffect(() => {
    if (!notesLoading && notes) {
      const processedData = notes.map(note => {
        // Sentiment analysis of the note content
        const sentimentScore = sentimentAnalyzer.analyze(note.content).score;
        return {
          date: dayjs(note.createdAt).format('YYYY-MM-DD'),
          score: sentimentScore,  // Mood classification
        };
      });

      // Set graph data for visualization
      setGraphData(processedData);
    }
  }, [notes, notesLoading]);

  const config = {
    data: graphData,
    xField: 'date',
    yField: 'score',
    smooth: true,
    height: 400,
    color: '#40a9ff',
    point: {
      size: 5,
      shape: 'diamond',
    },
    lineStyle: {
      lineWidth: 2,
    },
  };

  return (
    <div>
      {notesLoading ? <Spin /> : <Line {...config} />}
    </div>
  );
};

// SaveContentButton Component
const SaveContentButton = ({ contentType, contentId }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { mutateAsync } = useMutation(Api.savedContent.saveContent);

  const handleSave = async () => {
    try {
      await mutateAsync({
        contentType,
        contentId,
        userId: 'user-id-placeholder', // Replace with actual user ID
      });
      enqueueSnackbar('Content saved successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to save content.', { variant: 'error' });
    }
  };

  return <button onClick={handleSave}>Save Content</button>;
};

// PowerhousePage Component
export default function PowerhousePage() {
  const router = useRouter();
  const { user } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();
  const userId = user?.id;

  // Fetch notes for the mood graph
  const { data: notes, isLoading: notesLoading } = Api.note.findMany.useQuery({
    where: { userId },
  });

  // Fetch saved content for display
  const { data: savedContents, isLoading: savedContentsLoading } = Api.savedContent.findMany.useQuery({
    where: { userId },
    include: { content: true },
  });

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  const { mutateAsync } = Api.note.create.useMutation();

  const handleOk = async () => {
    try {
      const response = await mutateAsync({
        data: {
          content: noteContent,
          createdAt: selectedDate.toDate(),
          userId: userId,
        },
      });

      if (response?.id) {
        enqueueSnackbar('Note saved successfully!', { variant: 'success' });
        console.log('Note saved successfully with ID:', response.id);
      } else {
        enqueueSnackbar('Failed to save note. Please try again later.', { variant: 'error' });
      }
    } catch (error) {
      console.error('Failed to save note:', error);
      enqueueSnackbar('Failed to save note. Please check your connection and try again.', { variant: 'error' });
    } finally {
      setIsModalVisible(false);
      setNoteContent('');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNoteContent('');
  };

  const onDateSelect = date => {
    setSelectedDate(date);
    setIsModalVisible(true); // Show modal when a date is selected
  };

  return (
    <PageLayout layout="narrow">
      <Title level={1}>Powerhouse</Title>
      
      {/* Mood Graph Rendering */}
      <Row gutter={16}>
        <Col span={24}>
          <MoodGraph notes={notes} notesLoading={notesLoading} />
        </Col>
      </Row>

      {/* Note Input and Calendar */}
      <Card>
        <Calendar onSelect={onDateSelect} />
        <Modal
          title="Add Note"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <TextArea
            rows={4}
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Write your note here..."
          />
        </Modal>
      </Card>

      {/* Display Saved Content */}
      <Row gutter={16}>
        <Col span={24}>
          {savedContents && savedContents.map(content => (
            <Card key={content.id}>
              <Title level={4}>{content.contentType}</Title>
              <Text>{content.contentId}</Text>
              <SaveContentButton contentType={content.contentType} contentId={content.contentId} />
            </Card>
          ))}
        </Col>
      </Row>
    </PageLayout>
  );
  }
