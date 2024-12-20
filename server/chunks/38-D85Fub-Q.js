import { ShlinkApiClient } from '@shlinkio/shlink-js-sdk';
import '@shlinkio/shlink-js-sdk/api-contract';
import { d as private_env } from './shared-server-BfUoNEXY.js';
import { NodeHttpClient } from '@shlinkio/shlink-js-sdk/node';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { z } from './index-CuABlRvJ.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './constants-BTUpIS8C.js';

const VALID_ORDER = [
  "title",
  "dateCreated",
  "shortCode",
  "longUrl",
  "visits",
  "nonBotVisits"
];
const VALID_DIR = ["ASC", "DESC"];
const apiClient = new ShlinkApiClient(new NodeHttpClient(), {
  baseUrl: private_env.SHLINK_ENDPOINT,
  apiKey: private_env.SHLINK_API_KEY
});
const createLinksSchema = z.object({
  url: z.string().min(1).url(),
  slug: z.string().min(1),
  tags: z.string().array().min(1, "You need to select at least one tag")
});
const paramsSchema = z.object({
  page: z.coerce.number().default(1),
  orderBy: z.enum(VALID_ORDER).default("dateCreated"),
  dir: z.enum(VALID_DIR).default("DESC"),
  tags: z.string().array().default([]),
  search: z.string().optional()
});
const getParams = (url) => {
  const { data: params, error: paramError } = paramsSchema.safeParse({
    ...Object.fromEntries(url.searchParams.entries()),
    tags: url.searchParams.getAll("tags")
    // Allow multiple tags
  });
  if (paramError) {
    throw error(422, paramError.errors.map((e) => e.message).join(". "));
  }
  return params;
};
const updateLinksSchema = createLinksSchema;
const deleteLinksSchema = z.object({
  deleting: z.string().array().min(1)
});
const load = async ({ url, locals }) => {
  authorize(apiNames.ADMIN.SHLINK.READ, locals.user);
  const params = getParams(url);
  let domains;
  try {
    domains = await apiClient.listShortUrls({
      itemsPerPage: 20,
      page: params.page.toString(),
      orderBy: {
        field: params.orderBy,
        dir: params.dir
      },
      tags: params.tags,
      searchTerm: params.search
    });
  } catch (_e) {
    const e = _e;
    error(e.status, "Shlink error: " + e.title);
  }
  const tags = await apiClient.listTags();
  return {
    domains: domains.data,
    pagination: domains.pagination,
    tags: tags.data,
    createLinksForm: await superValidate(zod(createLinksSchema), {
      id: "create"
    }),
    updateLinksForm: await superValidate(zod(updateLinksSchema), {
      id: "update"
    })
  };
};
const actions = {
  create: async ({ locals, request }) => {
    authorize(apiNames.ADMIN.SHLINK.CREATE, locals.user);
    const createForm = await superValidate(request, zod(createLinksSchema));
    if (!createForm.valid) {
      return fail(400, { createForm });
    }
    try {
      await apiClient.createShortUrl({
        longUrl: createForm.data.url,
        customSlug: createForm.data.slug,
        tags: createForm.data.tags
      });
    } catch (_e) {
      const e = _e;
      return message(
        createForm,
        {
          message: e.detail,
          type: "error"
        },
        { status: e.status }
      );
    }
    return message(createForm, {
      message: "Link successfully created",
      type: "success"
    });
  },
  update: async ({ locals, request }) => {
    authorize(apiNames.ADMIN.SHLINK.UPDATE, locals.user);
    const updateForm = await superValidate(request, zod(updateLinksSchema));
    if (!updateForm.valid) {
      return fail(400, { updateForm });
    }
    try {
      await apiClient.updateShortUrl(updateForm.data.slug, void 0, {
        longUrl: updateForm.data.url,
        tags: updateForm.data.tags
      });
    } catch (_e) {
      const e = _e;
      return message(
        updateForm,
        {
          message: e.detail,
          type: "error"
        },
        { status: e.status }
      );
    }
    return message(updateForm, {
      message: "Link successfully updated",
      type: "success"
    });
  },
  delete: async ({ locals, request }) => {
    authorize(apiNames.ADMIN.SHLINK.DELETE, locals.user);
    const deleteForm = await superValidate(request, zod(deleteLinksSchema));
    if (!deleteForm.valid) {
      return fail(400, { deleteForm });
    }
    try {
      await Promise.all(
        deleteForm.data.deleting.map((t) => apiClient.deleteShortUrl(t))
      );
      await apiClient.deleteTags(
        (await apiClient.tagsStats()).data.filter((t) => t.shortUrlsCount === 0).map((t) => t.tag)
      );
    } catch (_e) {
      const e = _e;
      return message(
        deleteForm,
        {
          message: e.detail,
          type: "error"
        },
        { status: e.status }
      );
    }
    return message(deleteForm, {
      message: "Link(s) successfully removed",
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 38;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8BeD43SF.js')).default;
const server_id = "src/routes/(app)/admin/links/+page.server.ts";
const imports = ["_app/immutable/nodes/38.d5Wv-ujE.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/TagSelector.BFldg1VB.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/SearchBar.D5otZFyl.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/messages.DZzIl59o.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=38-D85Fub-Q.js.map
