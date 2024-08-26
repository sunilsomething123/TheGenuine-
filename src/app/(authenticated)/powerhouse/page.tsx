'use client'

import { useUserContext } from '@/core/context';
import { Api } from '@/core/trpc';
import { PageLayout } from '@/designSystem/layouts/Page.layout';
import { Line } from '@ant-design/charts';
import { FileTextOutlined, LikeOutlined, LineChartOutlined } from '@ant-design/icons';
import { Calendar, Card, Col, Input, Modal, Row, Spin, Typography } from 'antd';
import dayjs from 'dayjs';
import { useParams, useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import Sentiment from 'sentiment';

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
      try {
          // Attempt to save the note using the API
              const response = await Api.note.create.mutateAsync({
                    data: {
                            content: noteContent,
                                    createdAt: selectedDate.toDate(),
                                            userId: userId,
                                                  },
                                                      });

                                                          // Check if the response is valid and the note was saved successfully
                                                              if (response?.id) {
                                                                    enqueueSnackbar('Note saved successfully!', { variant: 'success' });

                                                                          // Optionally, you can log or handle the response ID
                                                                                console.log('Note saved successfully with ID:', response.id);
                                                                                    } else {
                                                                                          // Handle the scenario where the API call didn't return the expected response
                                                                                                enqueueSnackbar('Failed to save note. Please try again later.', { variant: 'error' });
                                                                                                    }
                                                                                                      } catch (error) {
                                                                                                          // Log the error for debugging purposes
                                                                                                              console.error('Failed to save note:', error);

                                                                                                                  // Notify the user of the failure
                                                                                                                      enqueueSnackbar('Failed to save note. Please check your connection and try again.', { variant: 'error' });
                                                                                                                        } finally {
                                                                                                                            // Reset the modal visibility and clear the note content input
                                                                                                                                setIsModalVisible(false);
                                                                                                                                    setNoteContent('');
                                                                                                                                      }
                                                                                                                                      };

  const handleCancel = () => {
        setIsModalVisible(false);
            setNoteContent('');
              };

                return (
                    <div>
                          {/* Your existing code for displaying the page and handling date selection */}

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
                                                                                                                    />
                                                                                                                          </Modal>
                                                                                                                              </div>
                                                                                                                                );
                                                                                                                                };

                                                                                                                                export default PowerhousePage;
  }                                                                                                                                    


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
