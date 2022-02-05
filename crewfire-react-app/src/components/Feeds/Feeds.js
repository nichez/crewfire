import React, { useState, useEffect, useCallback } from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';

import useStyles from './FeedsStyles';
import { getRequest } from '../../services/httpService';
import FeedItem from '../FeedItem/FeedItem';

const Feeds = () => {
  const classes = useStyles();
  const [feeds, setFeeds] = useState([]);
  const [tags, setTags] = useState('');

  useEffect(() => {
    onFetchFeeds();
  }, []);

  const onFetchFeeds = useCallback(async (tags = '') => {
    const result = await getRequest(`/feeds/${tags}`);

    if (result.status === 200 || result.status === 201) {
      const response = result.data;
      const { items } = response;

      setFeeds(items);
    }
  }, []);

  const onChangeTags = (event) => {
    setTags(event.target.value);
  };

  const handleSearchFeeds = () => {
    onFetchFeeds(tags);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.searchContainer}>
        <TextField
          label='Search feeds'
          className={classes.searchInput}
          value={tags}
          onChange={onChangeTags}
        />
        <Button color='primary' onClick={handleSearchFeeds}>
          Search
        </Button>
      </div>
      <Grid container spacing={2}>
        {feeds &&
          feeds.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.item}
              key={item.author_id}
            >
              <FeedItem item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Feeds;
