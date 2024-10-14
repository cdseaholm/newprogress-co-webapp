'use client'

import ImageFormat from "@/components/utility/imageFormat";
import { useStateStore } from "@/context/stateStore";

const PanelOne = ({ panelKey }: { panelKey: number }) => {

    return (
        <div className="py-8 px-4 rounded-br-md rounded-tr-md w-full text-center shadow-lg text-black backdrop-blur-sm" key={panelKey}>
            <p>
                {`Carl Seaholm is a tech enthusiast and self taught Web Developer. He has been working with Blogs and sites since about 2016. Up until recently, Carl used his skills to work on side projects, and improving sites during his day job. His side projects began as a self-improvement blog in 2016 using WordPress, Bluehost, and basic HTML. He took his love for self-improvement and began teaching himself to code a few years later. After which, he realized how much he actually loved seeing a site come into fruition. Now he spends his time making others' dreams a reality by taking care of their online precense for them. He spends his downtime playing piano and guitar, reading, writing (attempting to get his first book published while working on his second), teaching himself electronics and languages, and staying fit with the weightlifting and Brazilian Jiu Jitsu (a purple belt). He has a wonderful girlfriend and two crazy bengal cats. If for whatever reason you'd like to keep track of Carl and all of his progress, feel free to go to `} <a className="text-themeWater hover:underline hover:text-themeAcqua" href="https://www.carlseaholm.com">carlseaholm.com</a> {`, where in his sparetime he tracks his hobbies and continously updates his personal site. He would love nothing more than to see if he can help you.`}
            </p>
        </div>
    )
};

const PanelTwo = ({ blurb, panelKey }: { blurb: string, panelKey: number }) => {

    return (
        <div className="py-8 px-4 rounded-br-md rounded-tr-md w-full text-center shadow-lg text-black backdrop-blur-sm" key={panelKey}>
            <p>{blurb}</p>
        </div>
    )
};

export default function AboutComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery);
    const imSize = isBreakpoint <= 768 ? 60 : 150;
    const mdSize = isBreakpoint <= 1024 && isBreakpoint > 768;
    const smSize = isBreakpoint <= 768;

    const panelTitles = [
        'About New Progress',
        'About Carl Seaholm',
        'What New Progress can do for you?'
    ];

    const blurbs = [
        `New Progress itself was born from a Blog that began in 2016. New Progress became a way for founder Carl Seaholm to help others as much as he helps himself. New Progress may be a young company, but it's founder has been working with sites and blogs for years. New Progress' future has many avenues, including Applications to help encourage those who love many hobbies, applications free of Advertisements and clutter. He's been building sites for friends and family for years, and now he's ready to help you. He's been working with WordPress, Bluehost, and basic HTML for years. Not to mention JavaScript, TypeScript, countless CSS and Databases, as well as popular hosting platforms. He's ready to help you.`,
        `New Progress can help you modernize or update a website. Work out some kinks or build you one from scratch. Our styles are simple, elegant, quick, and reliable. That doesn't mean that if your site requires more details, more style, more features, or you have a specific idea in mind, we can't make that happen. As the founder of New Progress, I love building sites and seeing people pleased with my work. I'd love to help you. I love to help you make New Progress on what it is that you love.`
    ];

    const panels = [
        <PanelTwo key={0} blurb={blurbs[0] ? blurbs[0] : ''} panelKey={1} />,
        <PanelOne key={1} panelKey={0} />,
        <PanelTwo key={2} blurb={blurbs[1] ? blurbs[1] : ''} panelKey={2} />
    ];

    return (
        <div className="flex flex-col justify-start items-center h-full w-full">
            {panels.map((panel, index) => {
                const imageToUse = index === 0 ? '/images/logoBG.png' : index === 1 ? '/images/carlseaholmprofile.jpg' : '/images/whatcanidoforyou.jpg';
                const id = `panel-${index + 1}`;
                return (
                    <div className={`${smSize ? 'flex flex-col justify-start items-center' : 'flex flex-row'} py-3 mx-8 w-full`} key={index} id={id}>
                        {mdSize ? (
                            <div className={`flex flex-col justify-center items-center w-2/5 h-full rounded-tl-md rounded-bl-md bg-gradient-to-b from-inherit to-inherit/80 backdrop-blur-sm border-y border-l border-neutral-300`}>
                                <div className={`text-start`}>
                                    {panelTitles[index]}
                                </div>
                                <div className={`py-2`}>
                                    <ImageFormat image={imageToUse} imSize={100} index={index ? index : 0} />
                                </div>
                            </div>
                        ) : (
                            <div className={`flex flex-row justify-around items-center w-full md:w-2/5 rounded-tl-md max-md:rounded-tr-md md:rounded-bl-md bg-gradient-to-b from-inherit to-inherit/80 backdrop-blur-sm max-md:border-x max-md:border-t md:border-y md:border-l border-neutral-300`}>
                                <div className={`text-start`}>
                                    {panelTitles[index]}
                                </div>
                                <div className={`py-2`}>
                                    <ImageFormat image={imageToUse} imSize={imSize} index={index ? index : 0} />
                                </div>
                            </div>
                        )}
                        <div className={`${smSize ? "flex flex-row w-full border-t" : "flex flex-col w-3/5 border-l"} border-neutral-300`}>
                            {panel}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}