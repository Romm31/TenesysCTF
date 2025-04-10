import { GetServerSideProps } from "next";

interface HomeProps {
  flag: string; // 
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const flagValue = context.query.flag === "true" ? "tenesys{M4s1h_3a5Y_K4nn_Y4kkk??????}" : "";
  
  return {
    props: {
      flag: flagValue, 
    },
  };
};

const Home: React.FC<HomeProps> = ({ flag }) => {
  return (
    <div className="text-center p-10 bg-gray-800 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold">Nyari apa ngab?? disini gk ada flag jir wkwkwkwkwk</h1>
      <p className="mt-2 text-gray-400">Cari sampe ketemu yakk, gmw tw</p>
      <div id="flag-container" className="mt-4 text-green-500">
        {flag ? `GG Gemink kamu, selamat dapet door prize!!!!: ${flag}` : "cari woii jangan malasss"}
      </div>
    </div>
  );
};

export default Home;
