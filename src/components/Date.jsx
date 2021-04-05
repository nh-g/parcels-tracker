export default function Date({dateString}){
    const date = dateString.split("T")[0];
    const time = dateString.split("T")[1].split("Z");

    return (
        <p className="data-content">
            ETA: {date} at {time}
        </p>
    )
}
