import next from '../Assets/Images/Icon ionic-ios-arrow-dropleft.svg'
import prev from '../Assets/Images/Icon ionic-ios-arrow-dropright.svg'

export function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img src={prev} alt='' />
        </div>
    );
}

export function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img src={next} alt='' />
        </div>
    );
}