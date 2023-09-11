import './RghtCompStl.css'
import { FaPersonDress, FaPerson, FaRegFileCode } from 'react-icons/fa6'

const RightComp = ({ infoArr }) => {


    let data = infoArr.inpTypesArr.map((val) => {

        if (val.inptp === 'checkbox') {
            return (
                <div className='right_comp_chkbx_itm'>
                    <div className='right_comp_chkbx_itm_first_itm'>
                        <div className='right_comp_chkbx_itm_first_itm_in_1_itm'>
                            {val.inpName.inpNamef}
                        </div>
                        <div className='right_comp_chkbx_itm_first_itm_in_2_itm'>
                            <FaPerson />
                        </div>
                    </div>
                    <div className='right_comp_chkbx_itm_first_itm'>
                        <div className='right_comp_chkbx_itm_first_itm_in_1_itm'>
                            {val.inpName.inpNames}
                        </div>
                        <div className='right_comp_chkbx_itm_first_itm_in_2_itm'>
                            <FaPersonDress />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='right_comp_chkbx_itm_othr'>
                    <div className='right_comp_chkbx_itm_othr_in_first_item'>
                        {val.inpName}
                    </div>
                    <div className='right_comp_chkbx_itm_othr_in_second_item'>
                        <input type={val.inptp} />
                    </div>

                </div>
            )
        }

    })
    

    let membershiData = infoArr.membershipInfoArr.map((val) => {
        return (
            <div className='right_comp_section_membership_content'>
                <div className='right_comp_section_membership_content_in_first_item'>
                    <FaRegFileCode />
                </div>
                <div className='right_comp_section_membership_content_in_second_item'>
                    {val}
                </div>
            </div>
        )
    })


    return (
        <div className='right_comp_section'>
            <div className='right_comp_section_content'>
                <div className='right_comp_section_content_in_item_1'>
                    {data}
                </div>

                <div className='right_comp_section_content_in_item_2'>
                    <div className='right_comp_section_content_in_item_2_in_first_item'>
                        Membership
                    </div>
                    <div className='right_comp_section_content_in_item_2_insecond_item'>
                        {membershiData}
                    </div>
                </div>
                <div className='right_comp_section_content_in_item_3'>
                    <div className='right_comp_section_content_in_item_3_first_item'>
                        <button>CANCEL</button>
                    </div>
                    <div className='right_comp_section_content_in_item_3_second_item'>
                        <button>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightComp