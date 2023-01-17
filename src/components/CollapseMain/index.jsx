import Collapse from '../../components/Collapse';

const CollapseList = [
    {
      name: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      name: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        name: "Service",
        text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        name: "Sécurité",
        text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

  function CollapseMain({ open, isOpen }) {

    return (
		<div>
				{CollapseList.map(({ name, text }) =>
					(
						<div key={name}>
							<Collapse
								name={name}
								text={text}
                source={false}
                etat={false}
							/>
						</div>
					)
				)}
		</div>
	)

  }

  export default CollapseMain