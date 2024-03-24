import Card from "./Card";


function Tours({tours , removeTour}) {

    return (
        <div className="container">
            <div>
                <h2 className="title"> P L A N  With L O V E </h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour}  removeTour = {removeTour} > </Card>
                    } )
                }
            </div>
        </div>
    );

}

export default Tours;