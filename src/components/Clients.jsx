import { clients } from "../constants"
import styles from "../style"

const Clients = () =>  (
    <section className={`${styles.flexCenter} mr-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((clients) => (
          <div key={clients.id} className={`flex-1 min-w-[120px] h-10 `}>
            <img src={clients.logo} alt="client" className="sm:w-[192px] 
            w-[100px] object-contain hover:bg-white hover:p-2 hover:rounded-xl  xs:mb-[20px]" />
          </div>
        ))}
      </div>
    </section>
  )


export default Clients