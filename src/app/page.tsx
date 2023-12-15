import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from "./components/navigation/navbar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navigationbar />
        <h1>Sähköhinta</h1>
        <div className="w-full h-screen bg-green-300"></div>
      </div>
    </>
  );
}