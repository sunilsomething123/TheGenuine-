'use client';

import { Api } from '@/core/trpc';
import { PageLayout } from '@/designSystem/layouts/Page.layout';
import { Button, Card, Col, Input, message, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

const { Title, Paragraph, Text } = Typography;

export default function InspirationPage() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [character, setCharacter] = useState({});
  const [quote, setQuote] = useState({});
  const [challenge, setChallenge] = useState({});
  const [story, setStory] = useState({});
  const [wellnessTip, setWellnessTip] = useState({});
  const [dailyProgress, setDailyProgress] = useState({});

  // Fetch content
  const fetchContent = async () => {
    try {
      const [charData, quoteData, challengeData, storyData, wellnessData] = await Promise.all([
        Api.character.findUnique.useQuery({ id: 1 }), // Mocking the first character of the day
        Api.quote.findUnique.useQuery({ id: 1 }),
        Api.challenge.findUnique.useQuery({ id: 1 }),
        Api.story.findUnique.useQuery({ id: 1 }),
        Api.wellness.findUnique.useQuery({ id: 1 }),
      ]);

      setCharacter(charData.data);
      setQuote(quoteData.data);
      setChallenge(challengeData.data);
      setStory(storyData.data);
      setWellnessTip(wellnessData.data);
    } catch (error) {
      message.error('Failed to load content.');
    }
  };

  const saveContent = async (type, contentId) => {
    try {
      await Api.savedContent.create.mutateAsync({
        data: { type, contentId },
      });
      enqueueSnackbar('Content saved successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to save content.', { variant: 'error' });
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <PageLayout layout="narrow">
      {/* Today's Inspiration Header */}
      <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
        Today's Inspiration
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>{dayjs().format('MMMM D, YYYY')}</Paragraph>

      {/* Character of the Day */}
      <Card style={{ marginBottom: 24, padding: 16 }}>
        <Row>
          <Col span={8}>
            <Image src={character?.imageUrl} alt={character?.name} width={200} height={200} />
          </Col>
          <Col span={16}>
            <Title level={4}>{character?.name}</Title>
            <Paragraph>{character?.description}</Paragraph>
            <Button onClick={() => saveContent('character', character?.id)}>Save</Button>
            <Button style={{ marginLeft: 8 }} onClick={() => router.push(`/characters/${character?.id}`)}>
              Comment
            </Button>
            <Button style={{ marginLeft: 8 }}>Share</Button>
          </Col>
        </Row>
      </Card>

      {/* Secondary Content (Grid of Cards) */}
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Quote of the Day">
            <Text>{quote?.content}</Text>
            <Paragraph>- {quote?.author}</Paragraph>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Daily Challenge">
            <Text>{challenge?.text}</Text>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Inspirational Story">
            <Text>{story?.brief}</Text>
            <Button style={{ marginTop: 8 }} onClick={() => router.push(`/stories/${story?.id}`)}>
              Read More
            </Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Wellness Tip">
            <Text>{wellnessTip?.text}</Text>
          </Card>
        </Col>
      </Row>

      {/* Sidebar Section: User Contributions & Daily Progress Tracker */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card title="User Contributions" style={{ height: '100%' }}>
            <Text>Submit your daily stories or quotes here.</Text>
            <Input.TextArea placeholder="Write your contribution..." rows={4} />
            <Button type="primary" style={{ marginTop: 8 }}>Submit</Button>
          </Card>
        </Col>
        <Col span={16}>
          <Card title="Daily Progress Tracker">
            <Paragraph>Track your progress and goals for today.</Paragraph>
            <Paragraph>
              <strong>Progress:</strong> {dailyProgress?.completed || 0}/{dailyProgress?.total || 0} tasks completed
            </Paragraph>
            <Button type="primary" onClick={() => router.push('/progress')}>View Full Tracker</Button>
            <Paragraph style={{ marginTop: 16 }}>
              Keep up the good work! Your consistent efforts will help you reach your goals.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Footer: Navigation Links and Call to Action */}
      <Row justify="center" style={{ marginTop: 40 }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button type="primary" onClick={() => router.push('/explore')}>Explore More Content</Button>
          <Paragraph style={{ marginTop: 16 }}>Stay motivated and inspired every day with new challenges and stories!</Paragraph>
        </Col>
      </Row>

      {/* Footer: Social Media Links */}
      <Row justify="center" style={{ marginTop: 40 }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button onClick={() => router.push('/contact')} type="link">Contact Us</Button>
          <Button onClick={() => window.open('https://facebook.com', '_blank')} type="link" style={{ marginLeft: 8 }}>
            Facebook
          </Button>
          <Button onClick={() => window.open('https://twitter.com', '_blank')} type="link" style={{ marginLeft: 8 }}>
            Twitter
          </Button>
          <Button onClick={() => window.open('https://instagram.com', '_blank')} type="link" style={{ marginLeft: 8 }}>
            Instagram
          </Button>
        </Col>
      </Row>
    </PageLayout>
  );
}
