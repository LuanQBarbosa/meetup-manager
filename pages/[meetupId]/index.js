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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup'
      }
    }
  }
};

export default MeetupDetailsPage;