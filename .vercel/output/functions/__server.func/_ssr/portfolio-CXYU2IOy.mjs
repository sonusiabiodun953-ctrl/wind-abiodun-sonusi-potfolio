//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-CXYU2IOy.js
var profile = {
	name: "Sonusi Abiodun",
	role: "Data Analyst",
	stackLine: "Data Analyst  |  Power BI  ·  SQL  ·  Excel",
	email: "sonusiabiodun953@gmail.com",
	phone: "+2348141933457",
	phoneDisplay: "+234 814 193 3457",
	location: "Nigeria",
	availability: "Open to remote",
	linkedin: "",
	github: ""
};
var projects = [
	{
		slug: "global-child-mortality",
		title: "Global child mortality",
		eyebrow: "WHO Global Health Observatory",
		oneLiner: "Regional inequalities in under-five, infant, and neonatal mortality, 2000–2017.",
		hover: "Where under-five deaths concentrate across WHO regions, and how DTP3 coverage lines up with survival. Descriptive evidence, not a causal claim.",
		category: "Public health",
		year: "2000–2017",
		tools: [
			"Power BI",
			"Power Query",
			"Excel",
			"SQL"
		],
		image: {
			src: "/work/mortality-dashboard.jpg",
			alt: "Power BI overview of neonatal, infant, and under-five mortality by WHO region, with DTP3 coverage and causes of death.",
			caption: "Region slicer, mortality KPIs, DTP3 bars, and cause mix.",
			width: 864,
			height: 480
		},
		gallery: [],
		pdf: "/case-studies/global-child-mortality.pdf",
		pdfLabel: "Child mortality case study",
		bullets: [
			"Problem: under-five mortality is still high, uneven, and often preventable — decision-makers need the burden, the causes, and the service signal in one view.",
			"Approach: country rows from WHO GHO, cleaned in Power Query, aggregated to six WHO regions, with SQL used for region averages and country lists.",
			"Insight: the regional under-five bars run from about 11 per 1,000 live births in Europe to about 77 in Africa. Higher DTP3 coverage sits with the lower-mortality regions.",
			"The work stays descriptive. It is not an official WHO product and it does not claim that coverage causes survival."
		],
		problem: "Despite global progress, under-five mortality remains high and unevenly distributed. Many of those deaths are preventable. Teams need a clear regional picture of where the burden is highest, which causes dominate, and whether routine immunization coverage lines up with survival.",
		approach: [
			"Pulled official indicators from the WHO Global Health Observatory: neonatal, infant, and under-five mortality, counts of under-five deaths, DTP3 coverage, and causes of death under five.",
			"Used Excel for a first pass, then Power Query to drop unused columns, rename fields, set types, and filter sex or age where the extract required it.",
			"Modelled the region view in Power BI with DAX measures for average rates, total deaths, coverage, and cause distribution. SQLite queries checked region averages and country lists.",
			"Designed one region-level page with a year slicer and a WHO-region slicer so a reader can move from the global picture to a single region."
		],
		insights: [
			"Survival is sharply regional. On the under-five chart, Europe sits near 11 deaths per 1,000 live births, the Americas and South-East Asia in the mid-teens, the Western Pacific near 38, the Eastern Mediterranean near 61, and Africa near 77.",
			"DTP3 coverage, used here as a marker of routine services, runs the other way: about 93% in Europe and about 77% in Africa. That alignment is consistent with service reach. It is not proof that vaccination alone explains the gap.",
			"Leading causes called out in the analysis — prematurity, birth complications, pneumonia, diarrhoea, and malaria — are largely preventable or treatable with known interventions.",
			"Because deaths concentrate, progress in the highest-burden regions moves the global total more than the same effort where rates are already low."
		],
		learned: [
			"A region average and a country average answer different questions. The headline KPI on this page should not be read as the UN IGME population-weighted world rate.",
			"Cause-of-death shares have to be weighted by deaths. Summing percentage rows across countries inflates the scale and should not be read as the global mix.",
			"Putting the limitation on the page — descriptive, not causal — makes the chart more usable, not less."
		],
		limitations: [
			"Not every indicator exists for every country-year, so averages reflect the rows that are present.",
			"The causes-of-death series covers fewer years than the mortality rates.",
			"A multi-year window hides more recent change inside the 2000–2017 period.",
			"Absolute death totals need a defined grain. Summing country-years without care can overstate the burden.",
			"Analysis is descriptive. It does not identify what caused the differences between regions."
		],
		recommendations: [
			"Neonatal care: skilled birth attendance, essential newborn care, Kangaroo Mother Care, and management of birth asphyxia and sepsis.",
			"Immunization: move DTP3 and full coverage toward 90% under Immunization Agenda 2030, and close zero-dose gaps.",
			"Pneumonia and diarrhoea: pneumococcal and rotavirus vaccines, exclusive breastfeeding, oral rehydration with zinc, and timely antibiotics.",
			"Malaria in high-burden regions: insecticide-treated nets, intermittent preventive treatment, and rapid diagnosis with artemisinin-based therapy.",
			"Access, nutrition, and WASH: primary care, antenatal care, emergency obstetric referral, and safer water and sanitation."
		]
	},
	{
		slug: "logistics-operations",
		title: "Logistics operations",
		eyebrow: "Fleet · drivers · delivery · finance",
		oneLiner: "A four-page Power BI model of fleet health, driver output, on-time delivery, and profit.",
		hover: "One star schema, four decisions: is the fleet earning its keep, are drivers safe and productive, are loads on time, and what is left after fuel and maintenance.",
		category: "Logistics",
		year: "2026",
		tools: [
			"Power BI",
			"Power Query",
			"Excel",
			"DAX",
			"Canva"
		],
		image: {
			src: "/work/logistics-dashboard.jpg",
			alt: "Collage of four Power BI pages: driver performance, delivery and operations, fleet health, and financial overview.",
			caption: "Capstone pages sharing one navy and teal system.",
			width: 1920,
			height: 1080
		},
		gallery: [],
		pdf: "/case-studies/logistics-operations.pdf",
		pdfLabel: "Logistics operations case study",
		bullets: [
			"Problem: a 14-table operation was hard to read as a business — assets, people, service, and money lived in separate sheets.",
			"Approach: Excel tables, Power Query for missing keys and dates, a star schema with trips at the centre, and DAX for profit and operating cost.",
			"Insight: each page answers one monthly question — utilisation and maintenance, driver contribution and incidents, on-time rate and detention, revenue against fuel and upkeep.",
			"Design choice: the same KPI strip, slicers, and chart types on every page, so a reader learns the system once."
		],
		problem: "Operations, workforce, and finance were looking at related facts through unrelated tables: drivers, trucks, trailers, customers, facilities, routes, loads, trips, fuel, maintenance, delivery events, safety incidents, and monthly metrics. The brief was to make fleet efficiency, driver performance, delivery quality, and financial health readable together.",
		approach: [
			"Converted each sheet to an Excel table, replaced missing IDs with Unknown, and standardised date columns so relationships would not break on blanks.",
			"Appended the fuel-purchase tables in Power Query and built star-schema relationships in Model view, with trips as the central fact.",
			"Wrote DAX measures for profit and operating cost rather than storing those figures as columns that would drift.",
			"Shipped four pages — Fleet health, Driver performance, Delivery and operations, Financial overview — with year and status slicers, KPI cards, and a shared dark navy and teal theme."
		],
		insights: [
			"Fleet health is a joint view of miles, miles per gallon, fuel cost, maintenance, and gallons. Mileage without maintenance cost flatters an ageing asset.",
			"Driver performance needs revenue and trip counts next to incidents and fuel used. Productivity alone hides safety risk.",
			"Delivery quality is on-time rate plus detention, not on-time rate by itself. Time lost at the dock is an operations problem even when the load is marked complete.",
			"The financial page only works if revenue, fuel, and maintenance share a grain with loads. Profit is the measure, not a second copy of revenue."
		],
		learned: [
			"Unknown is a better key than a blank. Dropped relationships were the real data-quality bug, not the missing name.",
			"A consistent page grammar — KPI row, trend, breakdown — matters more than a new chart type on every page.",
			"Canva was the right tool for the leave-behind collage. The analytical argument still had to be settled in the model first."
		],
		limitations: [
			"This is a capstone on a teaching database, so the numbers illustrate the operation rather than a named carrier’s books.",
			"Profit here is revenue minus fuel and maintenance. It is not a full P&L (no labour, tolls, insurance, or overhead).",
			"Monthly trends depend on the date standardisation. A bad date column would have looked like a demand swing.",
			"Safety incidents are counts, not exposure rates, unless they are read per trip or per mile."
		],
		recommendations: [
			"Review trucks whose maintenance cost rises faster than miles before the next replacement cycle.",
			"Pair the incident list with trips and MPG so coaching is aimed at risk, not at the loudest revenue name.",
			"Treat detention as a customer and facility issue, and track it beside on-time percentage.",
			"Keep the profit measure in DAX and reconcile it monthly against fuel purchases and maintenance records."
		]
	},
	{
		slug: "sales-performance",
		title: "Multi-table sales",
		eyebrow: "Revenue, customers, cities",
		oneLiner: "A small sales model that shows who the revenue actually depends on.",
		hover: "Five customers, ten orders, and a ₦6.2 million line-item total — most of it in one account and one category. Useful, and concentrated.",
		category: "Sales",
		year: "2026",
		tools: [
			"Power BI",
			"Excel",
			"SQL"
		],
		image: {
			src: "/work/sales-dashboard.jpg",
			alt: "Power BI sales dashboard with customer, city, and category revenue, plus an order detail table.",
			caption: "Customers, cities, and category mix on one page.",
			width: 873,
			height: 493
		},
		gallery: [{
			src: "/work/sales-table.jpg",
			alt: "Detail table of customer, product, quantity, revenue, and order status, totalling 6,215,000.",
			caption: "Line-item grain behind the KPI cards. Total revenue ₦6,215,000.",
			width: 843,
			height: 436
		}],
		pdf: "/case-studies/sales-analysis.pdf",
		pdfLabel: "Sales analysis case study",
		bullets: [
			"Problem: leadership needed revenue leaders, customer impact, city trends, and where a small book of business could still grow.",
			"Approach: related sales tables in Power BI, with Excel for preparation and SQL alongside the model.",
			"Insight: Fatima Bello is about ₦4.1 million of the book — roughly two-thirds. Furniture is about 86% of revenue. Kano leads, then Lagos.",
			"The risk is concentration. Losing one account, or leaving orders pending, moves the whole result."
		],
		problem: "The company needed a plain answer for sales strategy: which products and categories make the money, which customers carry the book, how cities differ, and where effort would actually change the total.",
		approach: [
			"Brought the related sales tables into one model so customer, product, city, and status could be filtered together.",
			"Tracked a short KPI set: customers, orders, total revenue, and average revenue per order, then broke revenue by customer, city, and category.",
			"Kept the line-item table on the page so a chart claim can be checked against customer, product, quantity, and status.",
			"Wrote the recommendation from the concentration pattern, not from a second, more flattering cut of the same rows."
		],
		insights: [
			"The detail table totals ₦6,215,000. The write-up rounds the book to ₦6 million across 10 orders and 5 customers, with average revenue per order around ₦605,000.",
			"Fatima Bello contributes about ₦4.1 million. That is roughly 66% of revenue. The account is both the growth engine and the concentration risk.",
			"Furniture is about 86% of revenue and Electronics about 14%. The mix is a dependency, not just a preference.",
			"Kano leads city revenue, followed by Lagos. Abuja and Port Harcourt contribute less. Two orders are still pending, including one printer and one filing cabinet."
		],
		learned: [
			"A famous customer is not a strategy. The chart should make the dependency uncomfortable enough that someone acts on it.",
			"Average revenue per order and the line-item total have to share a grain. Order headers and product lines will not match if they are averaged together.",
			"A format string can invent a number. One KPI card rendered the average as a broken percentage; the written figure, not the card, is the one to trust until the format is fixed."
		],
		limitations: [
			"The extract is a small book: five customers and a handful of products. Patterns are real inside this file and easy to over-generalise.",
			"Pending versus completed is a status, not a forecast. It should not be read as a pipeline conversion rate.",
			"City rank follows where these customers are, not a market-sizing of those cities.",
			"No cost data, so this is a revenue analysis, not a margin analysis."
		],
		recommendations: [
			"Build a retention plan around the accounts that carry the book, starting with Fatima Bello, and add a second and third account so the total is not one relationship.",
			"Protect furniture, and investigate a deliberate push in electronics only where it does not distract from the core mix.",
			"Reuse what is working in Kano and Lagos when planning effort in Abuja and Port Harcourt, instead of copying spend evenly.",
			"Clear pending orders. They are a cash-flow and service issue, not a reporting footnote."
		]
	}
];
var categories = [
	"All",
	"Public health",
	"Logistics",
	"Sales"
];
function getProject(slug) {
	return projects.find((project) => project.slug === slug);
}
var skills = [
	{
		name: "Power BI",
		note: "Region and operations dashboards, slicers, and a page grammar people can relearn quickly.",
		icon: "layout"
	},
	{
		name: "Excel",
		note: "First inspection, Excel tables, and the export the model is actually built on.",
		icon: "sheet"
	},
	{
		name: "SQL",
		note: "Region averages, country lists, and a second check on what the visual is summarising.",
		icon: "database"
	},
	{
		name: "Power Query",
		note: "Types, renamed fields, filters, and appended tables before any chart is drawn.",
		icon: "workflow"
	},
	{
		name: "DAX",
		note: "Measures for rates, profit, and cost — calculated once, not typed into a column.",
		icon: "sigma"
	},
	{
		name: "Canva",
		note: "The leave-behind composition after the model and the story are already settled.",
		icon: "palette"
	}
];
var softSkills = [
	{
		name: "Storytelling",
		note: "One decision per page. The title says what changed, not the chart type."
	},
	{
		name: "Business problem framing",
		note: "Start from the question a manager can act on, then choose the grain and the cut."
	},
	{
		name: "Data modelling",
		note: "Facts, keys, and unknowns handled on purpose so the slicer does not silently drop rows."
	}
];
var process = [
	{
		step: "01",
		title: "Understand the question",
		text: "Write the decision in one line. Who is the reader, what would they do differently, and which number would change their mind?"
	},
	{
		step: "02",
		title: "Clean and model",
		text: "Types, keys, dates, and grain first. Missing IDs become Unknown. Measures stay in DAX or SQL, not in pasted values."
	},
	{
		step: "03",
		title: "Analyse",
		text: "Compare the cut that matters — region, customer, asset, month — and check the total against the detail table."
	},
	{
		step: "04",
		title: "Visualise",
		text: "KPI strip, one trend, one breakdown. Same theme and slicers so the second page does not feel like a new product."
	},
	{
		step: "05",
		title: "Recommend",
		text: "Say what to do next, and say what the chart cannot prove. A limitation is part of the answer."
	}
];
//#endregion
export { projects as a, profile as i, getProject as n, skills as o, process as r, softSkills as s, categories as t };
