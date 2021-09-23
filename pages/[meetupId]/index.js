import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage() {
  return (
    <MeetupDetail 
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}

export default MeetupDetailsPage;