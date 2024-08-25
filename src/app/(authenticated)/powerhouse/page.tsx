'use client'

import { useState, useEffect } from 'react';
import { Typography, Calendar, Card, Row, Col, Spin, Modal, Input, Button } from 'antd';
import { LikeOutlined, FileTextOutlined, LineChartOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import Sentiment from 'sentiment';
import { Line } from '@ant-design/charts';
import { useUserContext } from '@/core/context';
import { useRouter, useParams } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { Api } from '@/core/trpc';
import { PageLayout } from '@/designSystem/layouts/Page.layout';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

// MoodGraph Component
function MoodGraph({ notes, notesLoading }) {
  const [graphData, setGraphData] = useState([]);

  const sentimentAnalyzer = new Sentiment();

  useEffect(() => {
    if (!notesLoading && notes) {
      const processedData = notes.map(note => {
        const sentimentScore = sentimentAnalyzer.analyze(note.content).score;
        return {
          date: dayjs(note.createdAt).format('YYYY-MM-DD'),
          score: sentimentScore,
        };
      });

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
}

// PowerhousePage Component
export default function PowerhousePage() {
  const router = useRouter();
  const params = useParams();
  const { user } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();

  const userId = user?.id;

  const { data: notes, isLoading: notesLoading } = Api.note.findMany.useQuery({
    where: { userId },
  });
  const { data: savedContents, isLoading: savedContentsLoading } =
    Api.savedContent.findMany.useQuery({
      where: { userId },
      include: { content: true },
    });

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  const onDateSelect = date => {
    setSelectedDate(date);
    setIsModalVisible(true); // Show modal when a date is selected
  };

  const handleOk = async () => {
    // Save the note here using your API or state management
    try {
      await Api.note.create({
        data: {
          content: noteContent,
          createdAt: selectedDate.toDate(),
          userId: userId,
        },
      });
      enqueueSnackbar('Note saved successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to save note.', { variant: 'error' });
    }

    setIsModalVisible(false);
    setNoteContent('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNoteContent('');
  };

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Powerhouse</Title>
      <Paragraph>
        Manage your days, view saved content, and track your highs and lows.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Calendar" bordered={false}>
            <Calendar value={selectedDate} onSelect={onDateSelect} />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title="Saved and Liked Content"
            bordered={false}
            extra={<LikeOutlined />}
          >
            {savedContentsLoading ? (
              <Spin />
            ) : (
              savedContents?.map(savedContent => (
                <Card
                  key={savedContent.id}
                  type="inner"
                  title={savedContent.content?.content}
                  extra={<FileTextOutlined />}
                >
                  <Text>{savedContent.content?.author}</Text>
                </Card>
              ))
            )}
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24}>
          <Card
            title="Mood Graph"
            bordered={false}
            extra={<LineChartOutlined />}
          >
            <MoodGraph notes={notes} notesLoading={notesLoading} />
          </Card>
        </Col>
      </Row>

      {/* Modal for Writing Notes */}
      <Modal
        title={`Write a Note for ${selectedDate.format('YYYY-MM-DD')}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TextArea
          rows={4}
          value={noteContent}
          onChange={e => setNoteContent(e.target.value)}
          placeholder="Write your experience here..."
        />
      </Modal>
    </PageLayout>
  );
}
