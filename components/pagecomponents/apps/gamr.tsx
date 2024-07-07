export default function Gamr() {
    return (
        <div className={`flex flex-col items-center justify-start scrollbar-thin scrollbar-webkit w-full h-full p-2 pb-10`} style={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '10000px'}}>
            <div className="flex flex-col justify-start items-center w-4/5 my-12 md:my-16 lg:my-0"/>
            <h1 className="text-2xl md:text-4xl font-bold underline w-4/5 pb-5">Gamr</h1>
            <p className="w-4/5">
                {`NP Gamr is a game application where a user can play many classic games for free. Taking lessons from Chess.com where a user can learn a host of games, track their scores against others and challenge themselves. (Yet to upload to Github as this app is still never early).`}
            </p>
        </div>
    )
}