import Export from "../components/Explore";
import Travel from "../components/Travel";
import Landing from "@/components/Landing1";
import Description from "@/components/Description";
import "./globals.css";

export default function Home() {
  return (
    <main>
      {/* <Choose />
      <Ready /> */}
      {/* <Export head="Explore Our Exclusive Travel Packages"
              body="Embark on a journey of discovery with
                    our handpicked selection of exclusive travel
                    packages. From captivating cultural experiences
                    to breathtaking adventures in nature, our
                    meticulously crafted packages offer something
                    for every explorer. Dive into a world of
                    possibilities and let us guide you towards
                    unforgettable destinations, luxurious accommodations,
                    and immersive activities. "
      /> */}
      <div className="cont">
        <Landing />
        <Description />
        <Travel />
      </div>
    </main>
  );
}
