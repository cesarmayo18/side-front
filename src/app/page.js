import Link from "next/link";

const Home = () => {
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  return <div>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-sm shadow-inner rounded-2xl p-16">
        <ul style={{ listStyleType: 'none' }}>
          <Link
              href="http://localhost:1337/api/connect/google"
              passHref={true}
              className="border-2 border-gray-600 mt-8 text-gray-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Inicia sesión con Google
          </Link>
        </ul>
      </div>
    </div>
  </div>;
}

export default Home;