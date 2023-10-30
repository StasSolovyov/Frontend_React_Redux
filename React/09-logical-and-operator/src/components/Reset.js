function Reset({ count, setCount }) {
    const resetCount = () => {
        setCount(0);
    };
    return (
        !!count && (
            <button
                onClick={resetCount}
                style={{ backgroundColor: 'lightgreen' }}
            >
                Reset
            </button>
        )
    );
}

export default Reset;
