import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Image, Grid, ImageGroup, Card} from 'semantic-ui-react'
import {SagaActions} from '../actions'
import Error from "./error";
import Masonry from 'react-masonry-component';

class ImageBoard extends Component {
  componentDidMount() {
    this.props.dispatch(SagaActions.getImages());
  }

  render() {
    const images =
      this.props.images ?
        this.props.images.map(
          imageInfo =>
            <div key={imageInfo.id} className="image-element-class">
              <a href={imageInfo.download_url}>
                <Image
                  size={'medium'}
                  src={imageInfo.download_url}
                  width={(imageInfo.width / 10)}
                  height={(imageInfo.height / 10)}
                  alt={imageInfo.author}
                />
              </a>
            </div>
        ) :
        <Error>{this.props.error}</Error>;

    return (
      <div>
        <Masonry
          // className={'my-gallery-class'} // default ''
          // elementType={'ul'} // default 'div'
          // options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          // imagesLoadedOptions={imagesLoadedOptions} // default {}
          // style={style}
        >
          {images}
        </Masonry>
      </div>
    )
  }
}


export default connect((state) => ({
  images: state.images
}))(ImageBoard)
