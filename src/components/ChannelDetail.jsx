import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&type=video`)
    .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight = "95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(156deg, rgba(247,127,7,1) 20%, rgba(255,255,255,1) 45%, rgba(255,255,255,1) 55%, rgba(0,255,64,1) 80%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail