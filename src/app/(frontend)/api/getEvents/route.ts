import { getPayload } from 'payload'
import config from '@/payload.config'

const payload = await getPayload({ config })

export const GET = async () => {

    try {
        const events = await payload.find({
            collection: 'events' as any,
        })

        const pastEvents = events.docs.filter(event => event.status === "Past");
        const upcomingEvents = events.docs.filter(event => event.status !== "Past");

        return Response.json({
            success :true,
            upcomingEvents:upcomingEvents,
            pastEvents:pastEvents,
            status:200
        })

    } catch (error) {
        console.log(`Error in getting event, Error:`,error);
        return Response.json({success:false, Message:"Internet server error", status:500})
    }
}
