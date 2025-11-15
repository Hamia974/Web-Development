import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const destinationData = {
  paris: {
    video: "/paris.mp4",
    info: "Paris, the City of Light, is famous for its art, fashion, gastronomy, and culture. It is home to timeless landmarks like the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. Visitors enjoy strolling along the Seine River, exploring Montmartre’s charming streets, and indulging in world-class French cuisine. Paris combines romance, history, and modern elegance, making it one of the most visited cities in the world.",
  },
  dubai: {
    video: "/dubai.mp4",
    info: "Dubai, known as the jewel of the Middle East, is a city of innovation, luxury, and architectural marvels. The skyline is dominated by the world’s tallest building, the Burj Khalifa, while the Palm Jumeirah showcases human creativity in island design. Visitors can enjoy desert safaris, luxury shopping in massive malls, or traditional souks that celebrate Arabian heritage. Dubai is a perfect mix of futuristic modernity and cultural authenticity.",
  },
  maldives: {
    video: "/maldives.mp4",
    info: "The Maldives is a tropical paradise consisting of over a thousand coral islands, surrounded by turquoise waters and white sandy beaches. Known for its luxury resorts and vibrant marine life, it’s a dream destination for snorkeling, scuba diving, and water villas perched above the ocean. Whether you’re seeking adventure or relaxation, the Maldives offers an unforgettable experience in the lap of nature’s beauty.",
  },
  turkey: {
    video: "/turkey.mp4",
    info: "Turkey bridges Europe and Asia, blending ancient history with vibrant modern culture. From Istanbul’s iconic Hagia Sophia and Blue Mosque to Cappadocia’s surreal landscapes and hot-air balloon rides, Turkey offers a unique travel experience. Visitors can relax in Pamukkale’s thermal pools, explore Ephesus’ ancient ruins, or enjoy rich Turkish cuisine with flavors like kebabs and baklava. It’s a destination where history and culture come alive.",
  },
  egypt: {
    video: "/egypt.mp4",
    info: "Egypt, one of the cradles of civilization, is renowned for its ancient wonders. The Great Pyramids of Giza, the Sphinx, and the Valley of the Kings showcase the majesty of the pharaohs. Visitors can sail the Nile River, explore temples in Luxor and Aswan, or relax on the Red Sea’s beaches in Sharm El Sheikh and Hurghada. With a history spanning thousands of years, Egypt is a destination where myth and reality blend seamlessly.",
  },
  bali: {
    video: "/bali.mp4",
    info: "Bali, known as the Island of the Gods, is a tropical paradise in Indonesia. It’s famous for its lush rice terraces, stunning beaches, and cultural richness. Visitors can explore sacred temples like Uluwatu and Tanah Lot, surf in Kuta, dive in Nusa Penida, or unwind in Ubud’s serene jungles. With its mix of adventure, wellness retreats, vibrant nightlife, and Balinese hospitality, Bali is a haven for travelers seeking both relaxation and excitement.",
  },
  london: {
    video: "/london.mp4",
    info: "London, the capital of England, is a global metropolis that combines history, culture, and modern living. Landmarks like the Tower Bridge, Buckingham Palace, and the British Museum showcase its rich heritage. Visitors can ride the London Eye for panoramic views, shop in Oxford Street, or enjoy West End theater shows. With its diverse food scene, royal traditions, and vibrant neighborhoods, London remains one of the world’s most dynamic cities.",
  },
  switzerland: {
    video: "/switzerland.mp4",
    info: "Switzerland is a dream destination for nature lovers, famous for its stunning Alpine scenery, crystal-clear lakes, and charming villages. Whether skiing in Zermatt, hiking in Interlaken, or enjoying a scenic train ride on the Glacier Express, Switzerland offers breathtaking views at every turn. It is also known for Swiss chocolate, cheese, and precision watches, making it both a natural and cultural paradise.",
  },
  newyork: {
    video: "/newyork.mp4",
    info: "New York City, often called the city that never sleeps, is a global hub of culture, art, and business. From the Statue of Liberty and Times Square to Central Park and Broadway, NYC offers something for everyone. Visitors can explore world-class museums like the Met and MoMA, shop along Fifth Avenue, or enjoy the skyline views from the Empire State Building. With its fast-paced lifestyle, diversity, and endless attractions, New York is truly iconic.",
  },
};


const DestinationDetail = () => {
  const { destination } = useParams();
  const navigate = useNavigate();
  const data = destinationData[destination];

  if (!data) {
    return (
      <div>
        <Navbar />
        <div className="max-w-2xl mx-auto text-center mt-20">
          <h1 className="text-3xl font-bold text-red-600">Oops! Destination not found</h1>
          <p className="text-gray-600 mt-4">
            We don’t have details for <b>{destination}</b> yet. Please check back soon!
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold italic text-[#474769] text-center mb-6 capitalize">
          {destination}
        </h1>

        {/* Video Section */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <video
            src={data.video}
            controls
            autoPlay
            loop
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Info Paragraph */}
        <p className="text-lg text-gray-700  my-10">{data.info}</p>

        {/* Book Button */}
        <div className="flex justify-center">

          <button onClick={() => navigate("/packages")}
           className="bg-[#474769] text-white px-6 py-3 rounded-lg hover:bg-[#373754] transition">
            Book Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DestinationDetail;
