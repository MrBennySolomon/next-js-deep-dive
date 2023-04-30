import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head';

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A Meetup T-shirt",
    image:
      "https://i.etsystatic.com/18408871/r/il/479384/4358152710/il_1140xN.4358152710_buo4.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup T-shirt"
  },
  {
    id: "m2",
    title: "A Second Meetup T-shirt",
    image:
      "https://i.etsystatic.com/27105040/r/il/f79dcb/4098793900/il_1140xN.4098793900_a8aw.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup T-shirt"
  },
  {
    id: "m3",
    title: "A Third Meetup T-shirt",
    image:
      "https://i.etsystatic.com/37890296/r/il/ba772d/4889239717/il_1140xN.4889239717_i7ot.jpg",
    address: "Some address 15, 12345 Some City",
    description: "This is a third meetup T-shirt"
  }
];

const HomePage = () => {
  
  return (
    <>
    <Head>
      <title>React Meetups</title>
    </Head>
      <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
      </Layout>
    </>
  );
};

export default HomePage;
