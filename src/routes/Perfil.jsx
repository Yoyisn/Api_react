import { Avatar } from "../components/Avatar";

export function Perfiles () {
    const users = [
        {
            name: 'Jordy',
            imgUrl: 'https://www.dzoom.org.es/wp-content/uploads/2017/10/primerisimo-primer-plano-3-734x489.jpg',
            imageSize: 90
        },
        {
            name: 'Denim',
            imgUrl: 'https://www.dzoom.org.es/wp-content/uploads/2017/10/primerisimo-primer-plano-3-734x489.jpg',
            imageSize: 90
        }
    ]

    return (

     <div className="container">
        <div className="card-container">
            <div className="card">
              <img className="avatar" src={ users[1].imgUrl } alt={ 'Foto de: ' + users[1].name } 
              style={ { width: users[1].imageSize, height: users[1].imageSize } }/>
              <hr/>
              <h2>Usuario: { users[1].name }</h2>
            </div>
        </div>

        <div className="card">
            <Avatar size={ 100 } person={ {name: 'Jordy Martinez', imgId: 'Yfe0pq2'} }/>{' '}
        </div>

        <div className="card">
            <Avatar size={ 80 } person={ {name: 'Denim Daryokor', imgId: 'QKS67lh'} }/>{' '}
        </div>

        <div className="card">
            <Avatar size={ 50 } person={ {name: 'Matheo Jaja', imgId: '1bX5QH6'} }/>{' '}
        </div>
     </div>

    )
}