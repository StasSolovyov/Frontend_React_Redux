function Person({ firstName, lastName, img }) {
    return (
        <div className="card">
            <img src={img} />
            <h3>
                {firstName}
                {lastName}
            </h3>
        </div>
    );
}

export default Person;
