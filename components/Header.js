import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> Newz
                </h1>
            <p className={headerStyles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi consectetur modi commodi at, deleniti fuga magnam saepe tempore incidunt corporis vitae tempora minus nam ipsum cumque impedit itaque ab voluptatum excepturi et velit. Reiciendis, suscipit.</p>
        </div>
    )
}

export default Header