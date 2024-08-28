'use client'

import { useState } from 'react';
import { Typography, Input, Select, Card, Row, Col, Spin, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useUserContext } from '@/core/context';
import { useRouter, useParams } from 'next/navigation';
import { useSnackbar } from 'notistack';
import dayjs from 'dayjs';
import { Api } from '@/core/trpc';
import { PageLayout } from '@/designSystem/layouts/Page.layout';
import Image from 'next/image';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

export default function GetWindOfPage() {
  const router = useRouter();
  const params = useParams<any>();
  const { user } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [author, setAuthor] = useState<string | undefined>(undefined);
  const [showDescription, setShowDescription] = useState<{ [key: string]: boolean }>({});

  const { data: quotes, isLoading: quotesLoading } = Api.quote.findMany.useQuery({
    where: {
      AND: [
        { content: { contains: searchTerm } },
        category ? { category } : {},
        author ? { author } : {},
      ],
    },
  });

  const { data: images, isLoading: imagesLoading } = Api.image.findMany.useQuery({});
  const { data: videos, isLoading: videosLoading } = Api.video.findMany.useQuery({});

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleAuthorChange = (value: string) => {
    setAuthor(value);
  };

  const toggleDescription = (id: string) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const saveContent = async (contentType: string, contentId: string) => {
    try {
      const response = await Api.savedContent.create.mutateAsync({
        data: {
          contentType,
          contentId,
          userId: user?.id,
        },
      });
      enqueueSnackbar('Content saved successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to save content.', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Inspirational Quotes</Title>
      <Paragraph>Browse through various inspirational quotes, images, and videos.</Paragraph>

      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Input
            placeholder="Search quotes"
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
        <Col span={8}>
          <Select
            placeholder="Filter by category"
            style={{ width: '100%' }}
            onChange={handleCategoryChange}
            allowClear
          >
            <Option value="Motivation">Motivation</Option>
            <Option value="Life">Life</Option>
            <Option value="Success">Success</Option>
          </Select>
        </Col>
        <Col span={8}>
          <Input
            placeholder="Filter by author"
            value={author}
            onChange={(e) => handleAuthorChange(e.target.value)}
          />
        </Col>
      </Row>

      {quotesLoading || imagesLoading || videosLoading ? (
        <Spin size="large" />
      ) : (
        <div style={{ display: 'flex', overflowX: 'scroll' }}>
          {quotes?.map((quote) => (
            <Card key={quote.id} style={{ minWidth: 300, marginRight: 16 }}>
              <Text>{quote.content}</Text>
              <Paragraph>- {quote.author}</Paragraph>
              <Text type="secondary">{dayjs(quote.datePosted).format('MMMM D, YYYY')}</Text>
              <Button onClick={() => saveContent('quote', quote.id)}>Save</Button>
            </Card>
          ))}
          {images?.map((image) => (
            <Card
              key={image.id}
              style={{ minWidth: 300, marginRight: 16, position: 'relative' }}
              cover={<Image alt={image.title} src={image.url} style={{ width: '100%' }} />}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  width: '100%',
                  color: 'white',
                  padding: 8,
                }}
              >
                <Title
                  level={4}
                  style={{
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                    marginBottom: 0,
                    textAlign: 'left',
                  }}
                >
                  {image.title}
                </Title>
                <div
                  style={{
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50px',
                    zIndex: 1,
                  }}
                />
                <Paragraph
                  style={{
                    color: 'white',
                    marginTop: 20,
                    display: showDescription[image.id] ? 'block' : 'none',
                    zIndex: 2,
                    position: 'relative',
                  }}
                >
                  {image.description}
                </Paragraph>
                <a
                  style={{
                    color: 'white',
                    marginTop: 10,
                    cursor: 'pointer',
                    zIndex: 2,
                    position: 'relative',
                    display: 'inline-block',
                  }}
                  onClick={() => toggleDescription(image.id)}
                >
                  {showDescription[image.id] ? 'Read Less' : 'Read More'}
                </a>
              </div>
              <Button onClick={() => saveContent('image', image.id)}>Save</Button>
            </Card>
          ))}
          {videos?.map((video) => (
            <Card
              key={video.id}
              style={{
                minWidth: 300,
                marginRight: 16,
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '125%', // 4:5 aspect ratio
                  height: 0,
                }}
              >
                <video
                  src={video.url}
                  autoPlay
                  loop
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                    padding: '10px 20px',
                    zIndex: 1,
                  }}
                >
                  <Title
                    level={2}
                    style={{
                      color: 'white',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                      marginBottom: 0,
                      textAlign: 'left',
                    }}
                  >
                    {video.title}
                  </Title>
                </div>
              </div>
              <Paragraph
                style={{
                  color: 'white',
                  marginTop: 20,
                  display: showDescription[video.id] ? 'block' : 'none',
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                {video.description}
              </Paragraph>
              <a
                style={{
                  color: 'white',
                  marginTop: 10,
                  cursor: 'pointer',
                  zIndex: 2,
                  position: 'relative',
                  display: 'inline-block',
                }}
                onClick={() => toggleDescription(video.id)}
              >
                {showDescription[video.id] ? 'Read Less' : 'Read More'}
              </a>
              <Button onClick={() => saveContent('video', video.id)}>Save</Button>
            </Card>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
