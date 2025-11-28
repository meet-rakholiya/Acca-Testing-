import { useState } from "react";
import bannerImage1 from "../assets/image/banner1.png";
import bannerImage2 from "../assets/image/banner2.png";
import backtohome from "../assets/image/backtohome.png";
import interviewbanner from "../assets/image/interviewbanner.png";
import sustainable from "../assets/image/sustainable.png";
import innovative from "../assets/image/innovative.png";
import future from "../assets/image/future.png";
import accaflashcard from "../assets/image/accaflashcard.png";
import videoicon from "../assets/image/videoicon.png";
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Impactfulcv from "../assets/image/Impactfulcv.jpeg";
import firstimpression from "../assets/image/firstimpression.jpeg";
import linkedin from "../assets/image/linkedin.jpeg";
import dressing from "../assets/image/dressing.jpeg";
import crafting1 from "../assets/image/crafting1.png";
import questions1 from "../assets/image/questions1.png";
import stregnth from "../assets/image/stregnth.jpeg";
import learning from "../assets/image/learning.jpeg";
import company from "../assets/image/company.jpeg";
import conversation from "../assets/image/conversation.jpeg";
import expertise from "../assets/image/expertise.jpeg";
import asking2 from "../assets/image/asking2.png";
import practice from "../assets/image/practice.jpeg";
import sample from "../assets/image/sample.pdf";
import car from "../assets/image/car.pdf";
import kad from "../assets/image/kad.pdf";
import dla from "../assets/image/dla.pdf";
import reflect from "../assets/image/reflect.png";


const Interview = () => {
    const navigate = useNavigate();
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const theme = e.dataTransfer.getData("theme");

        if (theme === "sustainable") navigate("/sustainable");
        else if (theme === "innovative") navigate("/innovative");
        else if (theme === "future") navigate("/future");
    };

    // ============================================
    // ✨ UPDATED: Added unique alt text for each video
    // ============================================
    const videos = [
        {
            id: "video1",
            img: asking2,
            title: "Ask the right questions",
            desc: "Learn what questions to ask in an interview to show initiative.",
            alt: "Video thumbnail: Ask the right questions video",
            youtubeUrl:
                "https://play.webvideocore.net/popplayer.php?it=2s8paki17ois&is_link=1&auto_play=0&aspect_ratio=16:9",
        },
    ];



    const handlePlayVideo = (youtubeUrl: string) => {
        setCurrentVideoUrl(youtubeUrl);
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setCurrentVideoUrl("");
    };

    return (
        <div className="remove-scrollbar min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-black text-white overflow-hidden min-h-[200px]">
                <div className="absolute inset-0">
                    <img
                        src={interviewbanner}
                        alt="Interview Prep Series banner. Close-up of hands over a desk, one writing notes or providing feedback with a pen."
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="margin-acca container mx-auto relative z-10 flashcard-banner">
                    <div className="">
                        <h1 className="" style={{ fontSize: '70px', lineHeight: '60px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
                            Interview Prep Series<span style={{ color: '#D20024' }}>.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Sidebar Mobile*/}
            <div className="inter-breadcrumbs">
                <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
                    <a href="" className="cursor-pointer block navigation">
                        <a href="/"><span> Home /</span></a>{" "}
                        <a href="#"><span style={{ fontWeight: "600" }}>Interview Prep Series</span></a>
                    </a>
                </div>
            </div>

            {/* Main Content of the page */}
            <section className="pt-10 pb-6 interview-page">
                <div className="custom-container">
                    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex">

                        {/* Sidebar desktop */}
                        <div className="col-span-2 space-y-2 sidebar-desktop">
                            <a href="/" className="block">
                                <div className="cursor-pointer back-to-home group">
                                    <img
                                        src={backtohome}
                                        alt="Back arrow"
                                        className="arrow inline-block align-middle mr-1 transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
                                        style={{ width: "22px", height: "16px" }}
                                    />
                                    <span style={{ fontSize: "16px", fontWeight: "500" }}>Back to</span>
                                    <br />
                                    <span className="home-align" style={{ fontSize: "22px", fontWeight: "500" }}> Home</span>
                                </div>
                            </a>

                            <a href="/flashcards" className="cursor-pointer block">
                                <img
                                    src={accaflashcard}
                                    alt="ACCA Flashcards"
                                    className="w-full h-full object-cover ips-image"
                                />
                            </a>
                        </div>

                        {/* Interview Prep Series */}
                        <div className="col-span-10 space-y-6 interview-prep">
                            <h2 className="h2-fonts mb-2 mt-0">
                                Ace your interviews with clear, practical guidance.
                            </h2>
                            <p className="mb-0 main-p" style={{ marginBottom: "35px" }}>
                                Interviews can be your gateway to success, but only when you're well prepared. ACCA's Interview Prep Series equips you with the tools to approach every stage of the process with clarity, confidence, and professionalism. Whether you're entering the workforce or ready to take your next step, this series supports you in building skills that stand out.
                            </p>

                            {/* Video Grid - 2 columns */}
                            {/* ============================================ */}
                            {/* ✨ UPDATED: Using video.alt instead of template literal */}
                            {/* ============================================ */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 row-gaps">
                                {videos.map((video, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex items-center justify-center overflow-hidden relative">
                                            <div className="relative w-full h-full cursor-pointer">
                                                <img
                                                    src={video.img}
                                                    alt={video.alt}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Image Overlay */}
                                                <div
                                                    className="absolute inset-0"
                                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
                                                ></div>
                                                {/* Play Button Overlay */}
                                                <button
                                                    onClick={() => handlePlayVideo(video.youtubeUrl)}
                                                    className="absolute inset-0 flex items-center justify-center"
                                                >
                                                    <div className="w-auto h-auto flex items-center justify-center hover:scale-110 transition-transform">
                                                        <img
                                                            src={videoicon}
                                                            alt="Play video"
                                                            className="videoicon"
                                                        />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="mt-4">{video.title}</h3>
                                        <p className="mt-2 text-gray-600 text-sm">{video.desc}</p>
                                        <div className="mt-2 text-gray-700 text-sm addiinfo">
                                            {video.additionalInfo}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube Video Modal */}
            <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                <DialogContent className="max-w-none w-screen h-screen p-0 bg-color">
                    <DialogClose asChild>
                        <button
                            className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors videocross"
                            onClick={closeVideoModal}
                        >
                            <X size={32} />
                        </button>
                    </DialogClose>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full max-w-6xl aspect-video">
                            {currentVideoUrl && (
                                <iframe
                                    src={currentVideoUrl}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube Video"
                                />
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default Interview;