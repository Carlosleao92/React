class SlotResult extends React.Component {
    render() {

        let msg = this.props.s1 === this.props.s2 && this.props.s1 === this.props.s3 ? 'You Win!' : 'You Lose!';

        console.log(this.props);
        console.log(msg);

        return (
        <div>
            <p>{this.props.s1}{this.props.s2}{this.props.s3}</p>
            <p>{msg}</p>
        </div>);
    }
}