import { Flex, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import React, { ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  isLabel?: boolean
}

export const Logo: React.FC<Props> = ({
  height = 50,
  isLabel = false,
  style,
  ...props
}) => {
  const router = useRouter()

  const goTo = (url: string) => {
    router.push(url)
  }

  return (
    <Flex align="center" gap={10}>
      <img
        src="https://i.postimg.cc/FRFW0bXy/Picsart-24-08-24-12-02-35-393.png"
        height={height}
        style={{
          borderRadius: '5px',
          cursor: 'pointer',
          objectFit: 'contain',
          height: `${height}px`,
          ...style,
        }}
        {...props}
        onClick={() => goTo('/home')}
      />
      {isLabel && (
        <Typography.Title level={4} style={{ margin: '0px' }}>
          TheGenuinene
        </Typography.Title>
      )}
    </Flex>
  )
}
