import PersonalSettings from '../PersonalSettings/PersonalSettings';

import './AccountProfile.css';

const AccountProfile = () => {
    return (
        <div className="wrappingAccountProfile">
            <PersonalSettings />
            <div className="flexOrderPersonalSettingsAndAccountSettings">
                <h1>My Profile</h1>
                <span className="fitImgWithAccountInfo">
                    <img className="resizeImg" src="https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/158900682_3954884447866796_2198572172287358462_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=URFAZ_aHA94AX9A8orU&_nc_ht=scontent.fsof8-1.fna&oh=a6df53d3f0e20315cb0de7c70e7efc42&oe=608C4719" alt="Nothing to display" />
                    <span className="setCertainPointsForNewLines">
                        <button >Folow</button>
                        <h2 className="break">Nikolay11</h2>
                        <h3 className="break">Posts: 200</h3>
                        <h3>Subscribers: 10000</h3>
                    </span>
                </span>
                <hr className="borderLine" />
                <div className="ordersingleCollectionImgs">
                    <div>
                        <img className="singleCollectionImg" src="https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/158900682_3954884447866796_2198572172287358462_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=URFAZ_aHA94AX9A8orU&_nc_ht=scontent.fsof8-1.fna&oh=a6df53d3f0e20315cb0de7c70e7efc42&oe=608C4719" alt="Nothing to display" />
                    </div>
                    <img className="singleCollectionImg" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/75264835_2742030359183016_8364266702346649600_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=r7bLQwdPVBwAX8TZ5u1&_nc_ht=scontent-sof1-1.xx&oh=400c7026aa000311de48a179aa988e05&oe=608D2A74" alt="Nothing to display" />
                    <img className="singleCollectionImg" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/80199225_2816392198382699_3051217966206025728_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=KU7b8tIreE4AX9WNdog&_nc_ht=scontent-sof1-1.xx&oh=c5f75845729533c2f00cb0263a71be82&oe=608F6A02" alt="Nothing to display" />
                    <img className="singleCollectionImg" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/69301811_2621855837836337_2618653079473487872_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=60GhgUHhUOYAX-ga7NK&_nc_ht=scontent-sof1-1.xx&oh=d584cfbff493959e1b4b5c8ffa119089&oe=608D5653" alt="Nothing to display" />
                    <img className="singleCollectionImg" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/71601843_2613896311965623_904337134045888512_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Lfe8Hoh33DgAX_dybCd&_nc_ht=scontent-sof1-1.xx&oh=0022eb56d3198db1c038a0392658cc59&oe=608E3363" alt="Nothing to display" />
                    <img className="singleCollectionImg" src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/71278875_2606381276050460_4305736926494720000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=gUyz244L3ToAX_vYWa5&_nc_ht=scontent-sof1-1.xx&oh=21ac2a3d6de7eb2543271aed5f59cbb3&oe=60904DFF" alt="Nothing to display" />
                </div>

            </div>
        </div>
    )
}

export default AccountProfile