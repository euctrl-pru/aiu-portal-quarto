-- {{< blank_url "TITLE" "URL" >}}
-- {{< blank_url eurocontrol "TITLE" "URL" >}}
-- {{< a_blank_url skybrary "GA - General Aviation" "https://skybrary.aero/articles/general-aviation-ga" >}}

local function is_empty(s)
  return s == nil or s == ''
end

local function is_valid_org(org)
  if is_empty(org) then
    return ''
  end
  local org_table = {
    ["ec"]          = "European Union",
    ["ivao"]        = "IVAO",
    ["wiki"]        = "Wikipedia",
    ["wikipedia"]   = "Wikipedia",
    ["ectrl"]       = "EUROCONTROL",
    ["eurocontrol"] = "EUROCONTROL",
    ["skybrary"]    = "Skybrary"
  }
  
  for key, value in pairs(org_table) do
    if key == org then
      return value
    end
  end
  return ''
end

local function is_valid_url(org)
  if is_empty(org) then
    return ''
  end
  local url_table = {
    ["ec"]          = "https://ec.europa.eu/commission/index_en",
    ["ivao"]        = "https://ivao.aero",
    ["wiki"]        = "https://wikipedia.org",
    ["wikipedia"]   = "https://wikipedia.org",
    ["ectrl"]       = "https://eurocontrol.int",
    ["eurocontrol"] = "https://eurocontrol.int",
    ["skybrary"]    = "https://www.skybrary.aero"
  }

  for key, value in pairs(url_table) do
    if key == org then
      return value
    end
  end
  return ''
end


return {
  ["a_blank"] = function(args, kwargs, meta)
    if quarto.doc.is_format("html:js") then
      -- html specific output
      if #args == 3 then
        org = pandoc.utils.stringify(args[1])
        org_name = is_valid_org(org)
        title = pandoc.utils.stringify(args[2])
        url = pandoc.utils.stringify(args[3])
        org_url = is_valid_url(org)
        return pandoc.RawInline(
          'html',
          "<a target='_blank' "
             .. "href='" .. url .. "' "
             .. "title='" .. title .. "'>" .. title .. "</a> "
          .. " page at "
          .. "<a target='_blank' href='" .. org_url .. "' "
          .. "title='" .. org_name .. "'>" .. org_name .. "</a> website."
        )
      else
        return pandoc.Null()
      end
      if #args == 3 then
        org = pandoc.utils.stringify(args[1])
        org_name = is_valid_org(org)
        title = pandoc.utils.stringify(args[2])
        url = pandoc.utils.stringify(args[3])
        org_url = is_valid_url(org)
        return pandoc.RawInline(
          'html',
          "<a target='_blank' "
             .. "href='" .. url .. "' "
             .. "title='" .. title .. "'>" .. title .. "</a> "
          .. " page at "
          .. "<a target='_blank' href='" .. org_url .. "' "
          .. "title='" .. org_name .. "'>" .. org_name .. "</a> website."
        )
      else
        return pandoc.Null()
      end
    end
  return pandoc.Null()
  end
}