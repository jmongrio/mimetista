import './card-service.css';

interface Props {
    title: string,
    body: string,
}

export function CardService(props: Props) {
    return (
        <div className="col my-3">
            <div className="card mx-auto" style={{ width: "18rem", height: "22rem" }}>
                <div className="card-body">
                    <div className='mb-2' id='octagon'>
                    </div>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                </div>
            </div>
        </div>
    )
}