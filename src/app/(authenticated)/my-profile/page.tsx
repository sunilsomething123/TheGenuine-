'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Row, Col, Card, Spin } from 'antd'
import { EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MyProfilePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()

  const {
    data: userProfile,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      quotes: true,
      images: true,
      videos: true,
    },
  })

  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const { mutateAsync: deleteQuote } = Api.quote.delete.useMutation()
  const { mutateAsync: deleteImage } = Api.image.delete.useMutation()
  const { mutateAsync: deleteVideo } = Api.video.delete.useMutation()

  useEffect(() => {
    if (userProfile) {
      form.setFieldsValue({
        name: userProfile.name,
        email: userProfile.email,
        pictureUrl: userProfile.pictureUrl,
      })
    }
  }, [userProfile, form])

  const handleUpdateProfile = async (values: Prisma.UserUpdateInput) => {
    try {
      await updateUser({ where: { id: user?.id }, data: values })
      enqueueSnackbar('Profile updated successfully', { variant: 'success' })
      setIsEditing(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update profile', { variant: 'error' })
    }
  }

  const handleDeleteQuote = async (id: string) => {
    try {
      await deleteQuote({ where: { id } })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete quote', { variant: 'error' })
    }
  }

  const handleDeleteImage = async (id: string) => {
    try {
      await deleteImage({ where: { id } })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete image', { variant: 'error' })
    }
  }

  const handleDeleteVideo = async (id: string) => {
    try {
      await deleteVideo({ where: { id } })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete video', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Profile</Title>
      <Text>Manage your profile information and contributions.</Text>
      <Form form={form} layout="vertical" onFinish={handleUpdateProfile}>
        <Form.Item name="name" label="Name">
          <Input disabled={!isEditing} />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input disabled={!isEditing} />
        </Form.Item>
        <Form.Item name="pictureUrl" label="Profile Picture URL">
          <Input disabled={!isEditing} />
        </Form.Item>
        {isEditing ? (
          <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
            Save
          </Button>
        ) : (
          <Button
            type="default"
            onClick={() => setIsEditing(true)}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
        )}
      </Form>
      <Title level={3}>My Contributions</Title>
      <Row gutter={[16, 16]}>
        {userProfile?.quotes?.map(quote => (
          <Col span={24} key={quote.id}>
            <Card
              title={quote.content}
              extra={dayjs(quote.dateCreated).format('YYYY-MM-DD')}
            >
              <Button
                type="link"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteQuote(quote.id)}
              >
                Delete
              </Button>
            </Card>
          </Col>
        ))}
        {userProfile?.images?.map(image => (
          <Col span={24} key={image.id}>
            <Card
              cover={<img alt={image.title} src={image.url} />}
              title={image.title}
              extra={dayjs(image.dateCreated).format('YYYY-MM-DD')}
            >
              <Button
                type="link"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteImage(image.id)}
              >
                Delete
              </Button>
            </Card>
          </Col>
        ))}
        {userProfile?.videos?.map(video => (
          <Col span={24} key={video.id}>
            <Card
              cover={<video controls src={video.url} />}
              title={video.title}
              extra={dayjs(video.dateCreated).format('YYYY-MM-DD')}
            >
              <Button
                type="link"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteVideo(video.id)}
              >
                Delete
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
