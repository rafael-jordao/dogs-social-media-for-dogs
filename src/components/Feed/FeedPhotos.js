import React from 'react'
import Error from "../Helper/Error"
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from '../../api';
import useFetch from '../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import styles from "./FeedPhotos.module.css"

const FeedPhotos = ({setModalPhoto}) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 15, user: 0 })
      await request(url, options);
    }
    fetchPhotos();
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)

    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => {
          return (
              <FeedPhotosItem setModalPhoto={setModalPhoto} photo={photo} key={photo.id} />
          )
        })}
      </ul>
    )
  else return null
}

export default FeedPhotos;