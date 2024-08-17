'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import { Typography, Button, Row, Col, Card, Spin } from 'antd'
import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UserProfilePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const userId = params.userId

  const {
    data: profileUser,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: userId },
    include: {
      quotes: true,
      images: true,
      videos: true,
      followsAsFollower: true,
      followsAsFollowee: true,
    },
  })

  const { mutateAsync: followUser } = Api.follow.create.useMutation()
  const { mutateAsync: unfollowUser } = Api.follow.delete.useMutation()

  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    if (profileUser && user) {
      setIsFollowing(
        profileUser.followsAsFollowee.some(
          follow => follow.followerId === user.id,
        ),
      )
    }
  }, [profileUser, user])

  const handleFollow = async () => {
    try {
      await followUser({ data: { followerId: user.id, followeeId: userId } })
      enqueueSnackbar('Followed successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to follow', { variant: 'error' })
    }
  }

  const handleUnfollow = async () => {
    try {
      await unfollowUser({
        where: {
          id: profileUser.followsAsFollowee.find(
            follow => follow.followerId === user.id,
          ).id,
        },
      })
      enqueueSnackbar('Unfollowed successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to unfollow', { variant: 'error' })
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
      <Title level={2}>{profileUser.name}'s Profile</Title>
      <Text>{profileUser.email}</Text>
      <div style={{ marginTop: 20 }}>
        {isFollowing ? (
          <Button
            type="primary"
            icon={<UserDeleteOutlined />}
            onClick={handleUnfollow}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={handleFollow}
          >
            Follow
          </Button>
        )}
      </div>
      <div style={{ marginTop: 40 }}>
        <Title level={3}>Quotes</Title>
        <Row gutter={[16, 16]}>
          {profileUser.quotes?.map(quote => (
            <Col span={24} key={quote.id}>
              <Card>
                <Paragraph>{quote.content}</Paragraph>
                <Text type="secondary">{quote.author}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div style={{ marginTop: 40 }}>
        <Title level={3}>Images</Title>
        <Row gutter={[16, 16]}>
          {profileUser.images?.map(image => (
            <Col span={24} key={image.id}>
              <Card cover={<img alt={image.title} src={image.url} />}>
                <Card.Meta
                  title={image.title}
                  description={image.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div style={{ marginTop: 40 }}>
        <Title level={3}>Videos</Title>
        <Row gutter={[16, 16]}>
          {profileUser.videos?.map(video => (
            <Col span={24} key={video.id}>
              <Card>
                <video controls width="100%">
                  <source src={video.url} type="video/mp4" />
                </video>
                <Card.Meta
                  title={video.title}
                  description={video.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
