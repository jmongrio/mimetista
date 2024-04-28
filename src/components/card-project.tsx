interface Props {
    image: string;
    imageAlt: string;
    body: string;
}

export function CardProject(props: Props) {
    return (
        <div className="col my-2">
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.image} alt={props.imageAlt} />
                <div className="card-body">
                    <p className="card-text">{props.body}</p>
                    <a className="btn btn-danger px-5 align-self-center mt-4 btn-custom-shape w-100">Ver Proyectos</a>
                </div>
            </div>
        </div>
    )
}