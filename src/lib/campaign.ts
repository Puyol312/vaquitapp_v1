import { Campaign } from "./models/campaign";

type CampaignOptions = {
  title: string,
  description: string,
  image: string,
  amount: number,
  currentAmount: number,
}
async function creatCampaign({
	title,
	description,
	image,
	amount,
	currentAmount,
}: CampaignOptions) {
	try {
		const newCampaign = await Campaign.create({
			title,
			description,
			image,
			amount,
			currentAmount,
		});
		return newCampaign;
	} catch (error) {
		console.error(`Error al crear una campaign:\n ${error}`);
	}
}
async function getCampaign(): Promise<Campaign> {
  try {
    const latest = await Campaign.findByPk(
      await Campaign.max("id")
    );
    return latest
  } catch (error) {
    console.error(`Error al obtener la campaign:\n ${error}`)
  }

}
async function getCampaignById(id:number) { 
  try {
    const campaign = await Campaign.findByPk(id);
    return campaign;
  } catch (error) {
    console.error(`Error al obtener campaign by Id:\n ${error}`)
  }
}
async function getAllCampaign() { 
  try {
    const records = await Campaign.findAll();
    return records;
  } catch (error) {
    console.error(`Error al obtener todas las campaign:\n ${error}`)
  }
}
export { 
  creatCampaign,
  getCampaign,
  getCampaignById,
  getAllCampaign
}