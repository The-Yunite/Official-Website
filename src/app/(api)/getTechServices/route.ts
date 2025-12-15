import { getPayload } from 'payload';
import config from '@/payload.config';

let payloadClient: any;

async function getPayloadClient() {
    if (!payloadClient) {
        payloadClient = await getPayload({ config });
    }
    return payloadClient;
}

export async function GET() {
    try {
        const payload = await getPayloadClient();

        const techServices = await payload.find({
            collection: 'techServices',
        });

        return Response.json(
            { success: true, techServices:techServices.docs },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error getting featured events:', error);

        return Response.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
