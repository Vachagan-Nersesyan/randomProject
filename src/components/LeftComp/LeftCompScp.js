import { FaCircleUser ,FaSquareCaretRight } from 'react-icons/fa6'


import './LeftCompStl.css'

const LeftComp = (props) => {
    return (
        <div className='left_comp_content'>
            <div className='left_comp_content_container'>
                <div className='left_comp_content_container_first_item'>
                    <FaCircleUser />
                </div>
                <div className='left_comp_content_container_second_item'>
                    Lets get you set up
                </div>
                <div className='left_comp_content_container_third_item'>
                    Its should only take a couple of minutes to pair with your watch
                </div>
                <div className='left_comp_content_container_forth_item'>
                    <FaSquareCaretRight />
                </div>
            </div>
        </div>
    )
}

export default LeftComp