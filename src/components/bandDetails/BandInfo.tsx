import DOMPurify from 'dompurify';

// External components
import { Card } from 'react-bootstrap';

// Props
import IBandInfoProps from '../../interfaces/bandDetails/IBandInfoProps';

// Implementation
function BandInfo(props: { band: IBandInfoProps }) {
  // Sanitize the HTML from the band description
  var cleanDescription: string = DOMPurify.sanitize(props.band.description_blurb, { USE_PROFILES: { html: true } });
  return (
    <Card>
      { /* TODO: Handle broken or missing URL */ }
      <Card.Img variant="top" src={props.band.imgUrl} />
      <Card.Body>
        <Card.Text dangerouslySetInnerHTML={{ __html: cleanDescription }} />
      </Card.Body>
    </Card>
  );
}

export default BandInfo;
