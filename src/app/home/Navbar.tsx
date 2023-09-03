function Navbar() {
	return (
		<div className="column is-full tui-window">
			<fieldset className="tui-fieldset tui-border-solid">
				<legend className="center">Navbar</legend>
				<div className="is-flex is-align-content-end" id="navbar-menu">
					<div className="navbar-end">
						<a className="navbar-item" href="/">
							<span className="is-accent">h</span>ome.
						</a>
						<a className="navbar-item" href="#/projects">
							<span className="is-accent">p</span>rojects.
						</a>
						<a className="navbar-item" href="#/contact">
							<span className="is-accent">c</span>ontact.
						</a>
					</div>
				</div>
			</fieldset>
		</div>
	);
}

export default Navbar;
