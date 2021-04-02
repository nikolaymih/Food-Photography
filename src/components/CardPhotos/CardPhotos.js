import './CardPhotos.css'

const CardPhotos = () => {
    return (
        <section className="CardPhotos">
            <div className="sectionWrapper">
                <div className="individualSectionWrapper">
                    <p>Cretor: Nikolay11</p>
                    <img className="actualImg" src="https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/158900682_3954884447866796_2198572172287358462_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=URFAZ_aHA94AX9A8orU&_nc_ht=scontent.fsof8-1.fna&oh=a6df53d3f0e20315cb0de7c70e7efc42&oe=608C4719" alt="Nothing to display" />
                    <p className="descriptionImg">Description: Very beautiful people</p>
                    <h2 className="imgLikes">Likes: 20</h2>

                </div>
                <div className="individualSectionWrapper">
                    <img className="actualImg" src="https://images.squarespace-cdn.com/content/v1/5481117ee4b04d331215f69b/1588203305741-Y3SBM2U8CFWQCV9YMU37/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/Iceland_20190927__CVB7149.comp2-Edit.Squarespace.2000px.100quality.mini+copy.jpg?format=2500w" alt="Nothing to display" />
                    <p className="descriptionImg">Description: Very beautiful nature</p>
                    <h2 className="imgLikes">Likes: 30</h2>
                </div>
            </div>
        </section>
    )
}

export default CardPhotos