import CommonAvatarTeam from "../common/other/CommonAvatarTeam"
import SubHeader, { SubHeaderLeft, SubHeaderRight, SubheaderSeparator } from "../layout/SubHeader/SubHeader"
// import Button, { ButtonGroup } from "./bootstrap/Button"

const SubHeaderCustom = () => {
    return (
        <SubHeader className="mb-4">
            <SubHeaderLeft>
                <span className='h4 mb-0 fw-bold'>Overview</span>
                <SubheaderSeparator />
                {/* <ButtonGroup>
                    {Object.keys(TABS).map((key) => (
                        <Button
                            key={key}
                            color={activeTab === TABS[key] ? 'success' : themeStatus}
                            onClick={() => setActiveTab(TABS[key])}>
                            {TABS[key]}
                        </Button>
                    ))}
                </ButtonGroup> */}
            </SubHeaderLeft>
            <SubHeaderRight>
                <CommonAvatarTeam>
                    <strong>Marketing</strong> Team
                </CommonAvatarTeam>
            </SubHeaderRight>
        </SubHeader>
    )
}

export default SubHeaderCustom;