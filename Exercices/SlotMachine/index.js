
class SlotMachine extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <SlotResult s1="X" s2="Y" s3="Z" />
                <SlotResult s1="Y" s2="Y" s3="Z" />
                <SlotResult s1="Y" s2="Y" s3="Y" />
            </div>
        )
    }
}

ReactDOM.render(<SlotMachine />, document.getElementById('root'));
