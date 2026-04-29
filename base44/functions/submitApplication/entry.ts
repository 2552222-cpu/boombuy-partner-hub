import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
  const base44 = createClientFromRequest(req);
  const body = await req.json();
  const { org, contact, role, email, phone, size, sector } = body;

  // Save to DB
  const record = await base44.asServiceRole.entities.Application.create({
    org, contact, role, email, phone, size, sector, status: 'new'
  });



  return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});