// use props as the param
// update the videolistentry with the dynamic syntax

var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      {console.log('in videolistentry', props)}
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="thumbnail" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" src={props.video.snippet.title}>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail" src={props.video.snippet.description}>{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
