import "./styles.css"

type Props = {
    text: string
}

export default function ButtonPrimary({text}: Props) {
    return (
        <button className="gapi-btn gapi-btn-primary">{text}</button>
    );
}
