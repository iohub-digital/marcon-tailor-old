// Dependencies
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'
import { useSelector } from 'react-redux'

// Component
const Footer = () => {
	const router = useRouter()
	const { locale } = useSelector(state => state)

	return (
		<footer className="global__footer" data-slug={router.pathname}>
			<div className="wrap--flex">
				<div className="global__footer__left">
					<a className="logo-marcon" href="https://marcon.ca">
						<SVG src={`${process.env.BASE_PATH}/svg/Logo-Marcon-01-231x34.svg`} />
					</a>
					<SVG className="logo-building" src={`${process.env.BASE_PATH}/svg/Buildingforlife.svg`} />
				</div>

				<div className="global__footer__right">
					<ul className="link-list">
						<li>{locale.global.footer.projects}</li>
						<li>
							<a href="http://marcon.ca/en/projects/" target="_blank" rel="noopener noreferrer">
								{locale.global.footer.allProjects}
							</a>
						</li>
					</ul>

					<ul className="link-list">
						<li>{locale.global.footer.hoSupport}</li>
						<li>
							<a href="http://marcon.ca/en/home-owner/overview/" target="_blank" rel="noopener noreferrer">
								{locale.global.footer.overview}
							</a>
						</li>
						<li>
							<a
								href="http://customercare.marcon.ca/customercare/login?_ga=2.151397625.1506990333.1606844496-1308414839.1603733869"
								target="_blank"
								rel="noopener noreferrer"
							>
								{locale.global.footer.login}
							</a>
						</li>
					</ul>

					<ul className="link-list">
						<li>{locale.global.footer.company}</li>
						<li>
							<a href="http://marcon.ca/en/our-company/overview/" target="_blank" rel="noopener noreferrer">
								{locale.global.footer.overview}
							</a>
						</li>
						<li>
							<a href="http://marcon.ca/en/our-company/news/" target="_blank" rel="noopener noreferrer">
								{locale.global.footer.news}
							</a>
						</li>
						<li>
							<a href="http://marcon.ca/en/our-company/community/" target="_blank" rel="noopener noreferrer">
								{locale.global.footer.community}
							</a>
						</li>
						<li>
							<a href="http://marcon.ca/en/our-company/careers/" target="_blank" rel="noopener noreferrer">
								{locale.global.footer.careers}
							</a>
						</li>
					</ul>

					<ul className="link-list social">
						<li>
							<a href="https://www.facebook.com/MarconHomes" target="_blank" rel="noopener noreferrer">
								<SVG src={`${process.env.BASE_PATH}/svg/facebook.svg`} />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/MarconHomes" target="_blank" rel="noopener noreferrer">
								<SVG src={`${process.env.BASE_PATH}/svg/instagram.svg`} />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/marcon" target="_blank" rel="noopener noreferrer">
								<SVG src={`${process.env.BASE_PATH}/svg/linkedin.svg`} />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="global__footer__reverse">
				<div className="global__footer__reverse__left">
					<div>
						<a href="tel:6042991001" className="text-link" target="_blank" rel="noopener noreferrer">
							604.299.1001
						</a>
						<br />
						<a
							href="mailto:sales@tailorbymarcon.ca"
							className="text-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							Sales@TailorByMarcon.ca
						</a>
					</div>
				</div>
				<div className="global__footer__reverse__bottom">
					<p className="disclaimer">
						The material provided herein is for general informational purposes only and is not intended to depict
						as-built construction designs or finishes. The Developer reserves the right in its sole discretion to
						make modifications or changes to building design, floor plans, project designs, specifications,
						finishes, features, incentives and dimensions, without prior notice or compensation to any person. 
						Renderings and any depicted views are artistic concepts only.  Square footages are approximate and have
						been calculated from architectural drawings.  Actual final dimensions following completion of
						construction may vary from those set out herein. No information or material on this website is to be
						considered to be an offer to sell or rent a home, even if a price for a product or service may be
						indicated. E.&O.E.
					</p>

					<nav className="nav-util">
						<a href="http://marcon.ca/en/privacy-policy/" target="_blank" rel="noopener noreferrer">
							{locale.global.footer.privacy}
						</a>
						<a href="http://marcon.ca/en/terms-of-use/" target="_blank" rel="noopener noreferrer">
							{locale.global.footer.terms}
						</a>
						<a
							href="https://marcon.ca/wp-content/uploads/2020/10/Construction-Site-Full-COVID-19-Procedures.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							{locale.global.footer.covid}
						</a>
						<span className="bullet">&bull;</span>
						<span className="copywrite">&copy; 2023 Marcon</span>
					</nav>
				</div>
			</div>
		</footer>
	)
}

// Export
export default Footer
