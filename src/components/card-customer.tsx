interface Props{
    image: string;
    imageAlt: string;
    title: string;
    body: string;
}

export function CardCustomer(props: Props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <div className="d-flex align-items-center border-bottom pb-2">
                    <img src={props.image} className="rounded-circle" alt={props.imageAlt} />
                    <h5 className="card-title ms-2">{props.title}</h5>
                </div>
                <p className="card-text mt-2">{props.body}</p>
            </div>
        </div>
    )
}